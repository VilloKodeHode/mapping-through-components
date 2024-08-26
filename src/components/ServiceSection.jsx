import { ServiceCard } from "./ServiceCard";
import { SERVICE_LIST } from "../data/service_list";
import styles from "./serviceSection.module.css"

export const ServiceSection = () => {
  return (
    <section className={styles.service_section}>
      <h2>Tjenester</h2>
      <div className="flex flex-wrap gap-32 justify-center">
        {SERVICE_LIST.map((service, index) => (
          <ServiceCard
            key={service.title + index}
            src={service.src}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>
    </section>
  );
};
