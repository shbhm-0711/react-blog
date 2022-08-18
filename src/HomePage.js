import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main>
        <h2 className="text-3xl">Welcome to the homepage!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi
          magnam soluta sint tenetur accusantium, doloremque eum laboriosam
          earum quam aliquam quos eaque id ipsum ea repellendus eligendi odio
          dolore. Voluptatibus, dolor. Vitae ducimus dolor cumque explicabo
          autem? Architecto veniam non modi necessitatibus doloremque cumque
          assumenda distinctio commodi ipsam perspiciatis? Assumenda placeat
          dolore eos sit accusantium vel fugit reprehenderit laborum
          exercitationem, illum, a omnis nesciunt cum expedita voluptates
          inventore impedit veniam voluptas earum iste! Aliquid, iure.
          Exercitationem suscipit necessitatibus asperiores dolorum cupiditate
          perspiciatis perferendis ratione repudiandae culpa ea, maiores sit
          nostrum molestias sed delectus iste ut quos minus mollitia voluptate
          sint eaque! Fugiat ipsa saepe porro doloribus sint dicta magnam
          dignissimos, quibusdam veritatis accusamus debitis iusto similique eos
          pariatur quasi voluptate quo labore provident ullam corrupti odit enim
          vitae delectus! Quaerat animi ex commodi nulla quae, reiciendis ipsa
          similique culpa tempore, sit officiis quis, harum sequi voluptates
          doloremque itaque labore eveniet sed. A voluptatibus fugiat placeat
          omnis qui nemo natus, autem odio nisi earum, expedita magni repellat
          sit. Earum cumque totam mollitia aliquid velit amet aliquam rerum
          voluptatum. Consequuntur odit dolorum, sunt praesentium amet impedit
          nesciunt minima! Molestiae aspernatur harum veritatis numquam placeat
          inventore accusamus labore! Commodi minus nihil reiciendis!
        </p>
        <nav>
          <Link
            className="bg-amber-500 text-cyan-800 rounded-lg px-1"
            to="/about"
          >
            ....About Us
          </Link>
        </nav>
      </main>
    </>
  );
};

export default HomePage;
