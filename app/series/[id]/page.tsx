import { data } from "@/api/data";
import OpenedMovie from "@/components/OpenedMovie/OpenedMovie";

import React from "react";

const page = ({ params }: any) => {
  return (
    <div>
      {data
        .filter((obj) => {
          if (obj.id == params.id) {
            return true;
          } else {
            return false;
          }
        })
        .map((obj) => (
          <OpenedMovie
            id={obj.id}
            img={obj.urlFill}
            key={obj.id}
            image={obj.url}
            link={obj.link}
            ganre={obj.ganre}
            year={obj.year}
            time={obj.time}
            title={obj.title}
            rating={obj.rating}
            body={obj.body}
            country={obj.country}
            director={obj.director}
            actors={obj.actors}
            description={obj.description}
            type={obj.type}
            playerUrl={obj.playerUrl}
          />
        ))}
    </div>
  );
};

export default page;
