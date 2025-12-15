import iconSleep from "../../assets/images/icon-sleep.svg";

import styles from "./styles.module.css";

// Exemplo de dados
/* const quantities = [10, 8, 6, 4, 2, 0];
const days = Array.from({ length: 7 }, (_, i) => i + 1); // Dias 1 a 7
const data = [2, 4, 6, 8, 10, 6, 4]; // Quantidade por dia */

export const TrendsContainer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mood and sleep trends</h2>
      <div className="d-flex justify-content-between">
        <div className={`${styles.tableHeaderLeft} d-flex flex-column gap-3`}>
          <div>
            <img src={iconSleep} alt="Sleep Icon" />
            9+ hours
          </div>
          <div>
            <img src={iconSleep} alt="Sleep Icon" />
            7-8 hours
          </div>
          <div>
            <img src={iconSleep} alt="Sleep Icon" />
            5-6 hours
          </div>
          <div>
            <img src={iconSleep} alt="Sleep Icon" />
            3-4 hours
          </div>
          <div>
            <img src={iconSleep} alt="Sleep Icon" />
            0-2 hours
          </div>
        </div>
        <div
          className={`${styles.tableContent} d-flex gap-3`}
          style={{ 
            overflowX: "auto", 
            overflowY: "visible",
            paddingBottom: "10px",
            scrollBehavior: "smooth"
          }}
        >
          <div
            className="d-flex flex-column flex-shrink-0"
            style={{ width: "40px", minWidth: "40px" }}
          >
            <div className={styles.bar}>fwdw</div>
            <div>
              April <span className="fw-semibold">12</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-shrink-0" style={{ width: "40px", minWidth: "40px" }}>
            <div className={styles.bar}>fwdw</div>
            <div className="">April <span className="fw-semibold">13</span></div>
          </div>
          <div className="d-flex flex-column flex-shrink-0" style={{ width: "40px", minWidth: "40px" }}>
            <div className={styles.bar}>fwdw</div>
            <div>April <span className="fw-semibold">14</span></div>
          </div>
          <div className="d-flex flex-column flex-shrink-0" style={{ width: "40px", minWidth: "40px" }}>
            <div className={styles.bar}>fwdw</div>
            <div>April <span className="fw-semibold">15</span></div>
          </div>
          <div className="d-flex flex-column flex-shrink-0" style={{ width: "40px", minWidth: "40px" }}>
            <div className={styles.bar}>fwdw</div>
            <div>April <span className="fw-semibold">16</span></div>
          </div>
          <div className="d-flex flex-column flex-shrink-0" style={{ width: "40px", minWidth: "40px" }}>
            <div className={styles.bar}>fwdw</div>
            <div>April <span className="fw-semibold">17</span></div>
          </div>
          <div className="d-flex flex-column flex-shrink-0" style={{ width: "40px", minWidth: "40px" }}>
            <div className={styles.bar}>fwdw</div>
            <div>April <span className="fw-semibold">18</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};
