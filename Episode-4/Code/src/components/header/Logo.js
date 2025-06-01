
// Logo Component ⤵

import { LOGO_URL } from "../../../utils/contstants";

const Logo = () => (
    <div id="logo-container">
        <img
            className="logo"
            src={LOGO_URL}
            alt="logo"
        />
    </div>
);

export default Logo;