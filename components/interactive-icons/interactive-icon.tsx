"use client";
import "./animations.css";

import GeneralIcon from "./general";
import SecurityIcon from "./security-icon";
import InsuranceIcon from "./insurance-icon";
import LawfirmsIcon from "./lawfirms-icon";
import HomecareIcon from "./homecare-icon";

export default function InteractiveIcon({ service }: { service: string }) {
  switch (service) {
    case "homecare": {
      return <HomecareIcon />;
    }
    case "lawfirms": {
      return <LawfirmsIcon />;
    }
    case "insurance": {
      return <InsuranceIcon />;
    }
    case "security": {
      return <SecurityIcon />;
    }
    default: {
      return <GeneralIcon />;
    }
  }
}
