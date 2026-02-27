import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const BotBar = () => {
  const { t } = useTranslation();
  return (
    <div className="w-screen h-30 mt-20 px-5 flex items-center text-white justify-around bg-gradient-to-b from-[#041b1b] via-[#0c1c1b] via-[#0b2424] via-[#132c2c] via-[#0e242c] via-[#0b241c] via-[#142422] via-[#132c23] via-[#0c1c24] to-[#0c1414] sm:text-lg text-sm">
      <span>@{new Date().getFullYear()} {t("ui.all_rights")}</span>
      <div className="flex flex-col 1024:flex-row  gap-4 p-4">
        <span className="flex items-center cursor-pointer">
          <Phone color="royalblue" size={23} />
          000 000 000
        </span>
        <span className="flex items-center cursor-pointer">
          <Mail color="royalblue" size={25} />
          burgerCraft@gmail.com
        </span>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">
          <Instagram />
        </span>
        <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">
          <Facebook />
        </span>
      </div>
    </div>
  );
};

export default BotBar;
