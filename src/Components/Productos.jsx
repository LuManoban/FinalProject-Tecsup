import  { useEffect, useState } from 'react';

const Productos = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../utils/database.jsx');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="main">
      <section className="section">
        <h1 className="title">Nuestros Productos</h1>
        <div className="g-layout g-layout--auto-fit-columns j-items-center g-md" id="categories">
          {categories.map(({ id, image, avatar, slug, title, text }) => (
            <div className="card card--flip" key={id}>
              <div className="card__body--flip">
                <img src={image} width="48px" height="80px" className="img img--category"/>
              </div>
              <div className="card__body2 card__body--flip">
                <h1 className="card__title2">{title}</h1>
                <p className="card__text2">{text}</p>
                <img src={avatar} width="30px" height="30px" className="avatar"/>
                <a href={slug} target="_blank" rel="noopener noreferrer" className="button button--primary">Hacer Pedido</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Productos;