import "./style.css";

import Experience from "./Experience/Experience";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="sketch"></div>
`;

new Experience("#sketch");
