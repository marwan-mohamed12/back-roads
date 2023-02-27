import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

function Tours() {
    return (
        <section className="section" id="tours">
            <Title title="featured" titleSpan="tours" />
            <div className="section-center featured-center">
                {tours.map((tour) => {
                    const { id } = tour;
                    return <Tour {...tour} key={id} />;
                })}
            </div>
        </section>
    );
}
export default Tours;
