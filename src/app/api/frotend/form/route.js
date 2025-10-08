import { NextResponse } from "next/server";
import settingRate from "../../../helper/models/settingRate";
import settingRoll from "../../../helper/models/settingroll";
import Rates from "../../../helper/models/rates";
import RollOnRollRate from "../../../helper/models/rollandroll";
import { ConnectDb } from "../../../helper/db";

export async function GET(req) {
  try {
    await ConnectDb();

    const { searchParams } = new URL(req.url);
    const postcode = searchParams.get("postcode")?.trim().toLowerCase();
    const jobType = searchParams.get("jobType")?.trim().toLowerCase();

    if (!postcode || !jobType) {
      return NextResponse.json({ success: false, message: "postcode and jobType are required" }, { status: 400 });
    }

    let rates = [];

    if (jobType === "roll and roll off") {
      const res = await RollOnRollRate.find({}).lean();
      const filtered = res.filter(x => x.postId?.postcode?.trim().toLowerCase() === postcode);

      if (filtered.length > 0) {
        rates = filtered;
      } else {
        const defaultRolls = await settingRoll.find({}).lean();
        rates = defaultRolls;
      }
    } else {
      const res = await Rates.find({}).populate("postId categoryId sizeId").lean();
      const filtered = res.filter(
        x =>
          x.postId?.postcode?.trim().toLowerCase() === postcode &&
          x.categoryId?.category?.trim().toLowerCase() === jobType
      );

      if (filtered.length > 0) {
        rates = filtered;
      } else {
        const defaultRates = await settingRate.find({}).populate("categoryId sizeId").lean();
        rates = defaultRates.filter(
          r => r.categoryId?.category?.trim().toLowerCase() === jobType
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Rates fetched successfully",
      data: rates,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Fetching rates failed",
      data: error.message,
    });
  }
}
