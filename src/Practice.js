import React from 'react';
import articles from './articles.js';

const example = articles.map((article) => {
  const { img,text, title, id } = article;
  return (
    <section key={id}>
      <h1>{title}</h1>
      <img src={img} alt="" />
      <p>{text}</p>
    </section>
  );
});

// const Example = (props) => {
//   const { img, title, text, id } = props.article;
//   return (
//     <section key={id}>
//       <h1>{title}</h1>
//       <img src={img} alt="" />
//       <p>{text}</p>
//     </section>
//   );
// };

function Practice() {
    return (
        <section>
            {example}
            {/* {articles.map((article)=>{
            return <Example article={article}></Example>
        })
            } */}
        </section>
    )
}


export default Practice
