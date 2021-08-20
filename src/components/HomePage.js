import React, { useState } from "react";
import "./HomePage.scss";
import MoviesRow from "./MoviesRow";
import SliderImg from "./SliderImg";
import request from "./request";
import Banner from "./Banner";
import Lottie from 'react-lottie';
import * as animation from './45733-movie-time-animation'
import { useEffect } from "react";


const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animation.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};


function HomePage() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 2300);
  }, []);

  return !loader ? (
    <>
      <div className="loading-container">
      <Lottie options={defaultOptions}
              height={200}
              width={200}/>
      </div>
    </>
  ) : (
    <div className="container">
      <SliderImg />
      <Banner
        title="rio2"
        overview="Rio 2 is a 2014 American 3D computer-animated musical comedy film produced by Blue Sky Studios and directed by Carlos Saldanha. It is the sequel to the 2011 computer-animated film Rio. The title refers to the Brazilian city of Rio de Janeiro, where the first film was set and Rio 2 begins, though most of its plot occurs in the Amazon rainforest. The film stars Jesse Eisenberg, Anne Hathaway, will.i.am, Jamie Foxx, George Lopez, Tracy Morgan, Jemaine Clement, Leslie Mann, Rodrigo Santoro, and Jake T."
        image="/images/rio-2.jpg"
        imdb="6.3"
        date="April 11, 2014"
      />
      <MoviesRow title="Most Popular" fetch={request.fetchPopular} />
      <Banner
        title="luca"
        overview="Luca is an upcoming American computer-animated coming-of-age fantasy comedy film produced by Pixar Animation Studios and distributed by Walt Disney Studios Motion Pictures. The film is directed by Enrico Casarosa in his feature-length directorial debut, written by Jesse Andrews and Mike Jones, produced by Andrea Warren, and starring the voices of Jacob Tremblay, Jack Dylan Grazer, Emma Berman, Marco Barricelli, Saverio Raimondo, Maya Rudolph, and Jim Gaffigan. The film will be dedicated to Italian musician Ennio Morricone, who was originally considered to compose the soundtrack, but died before he was asked to do so."
        image="/images/Luca.jpg"
        imdb="8.1"
        date="Jun 18th, 2021"
      />
      <MoviesRow title="Upcoming Movies" fetch={request.fetchUpcoming} />
      <Banner
        title="ainbo"
        
        overview="Ainbo: Spirit of the Amazon, stylized as AINBO: Spirit of the Amazon[4] and also known as simply Ainbo,[5] is an 2021 computer-animated adventure film co-directed by José Zelada and Richard Claus, with story by Zelada. Produced by Tunche Films and Cool Beans, Cinema Management Group oversees worldwide distribution.

The plot follows an adventurous young girl named Ainbo, who, along with her animal spirit guides, sets out to save her jungle paradise in the Amazon from loggers and miners. The film is noted as an authentic description of the Amazon rainforest folklore."
        image="/images/anibo.jpg"
        imdb="5.8"
        date="10 February 2021"
      />
      <MoviesRow title="Trending Now" fetch={request.fetchTrending} />
    </div>
  );
}

export default HomePage;
