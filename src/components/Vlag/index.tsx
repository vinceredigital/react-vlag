import React, { ReactElement } from "react";
import { useVlag } from "../../libs/context";
interface VlagProps {
  name: string;
  children: (isActive: boolean) => ReactElement;
}

const Vlag: React.FC<VlagProps> = (props) => {
  const ff = useVlag();
  return props.children(ff.isEnabled(props.name));
};

export default Vlag;
