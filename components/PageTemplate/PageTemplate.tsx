import React, { ReactNode } from "react";
import styles from "./PageTemplate.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { links } from "../../constans/links";

type PageTemplateProps = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.headerWrapper}>
        <Header logo={"SANTENORA"} links={links} />
      </div>

      <main className={styles.mainContent}>{children}</main>

      <Footer />
    </div>
  );
};

export default PageTemplate;
