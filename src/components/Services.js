import { services } from "../data";
import Service from "./Service";
import Title from "./Title";
function Services() {
    return (
        <section className="section services" id="services">
            <Title title="our" titleSpan="services" />
            <div className="section-center services-center">
                {services.map((service) => {
                    const { id } = service;
                    return <Service {...service} key={id} />;
                })}
            </div>
        </section>
    );
}
export default Services;
