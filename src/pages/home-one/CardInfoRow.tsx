import { IconCheckbox } from "@tabler/icons-react";

type Props = {
  text: string;
  info: string;
};

const CardInfoRow = ({ text, info }: Props) => {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <IconCheckbox /> <p className="m-text">{text}</p>
      </div>
      <p className="h4 font-medium">{info}</p>
    </div>
  );
};

export default CardInfoRow;
