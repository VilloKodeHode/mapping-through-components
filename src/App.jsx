import "./App.css";
import { ServiceSection } from "./components/ServiceSection";
import styles from "./components/anotherSection.module.css"

function App() {

  return (
    <>
<ServiceSection/>
<section className={`h-screen border-2 border-white w-full ${styles.service_section}`}>another section</section>
    </>
  );
}

export default App;
