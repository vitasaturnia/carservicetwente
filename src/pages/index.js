import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';
import '../scss/styles.css'
import BackGround from "../images/bk3.png"


const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."

        />
      </Helmet>



              <div>
              <ul class="menu cf">
      <li><a href="#">Diagnose</a></li>
      <li><a href="#">Bandenwissel</a></li>
  <li><a href="#">Onderhoud</a></li>
  <li><a href="#">Airco</a></li>
  <li><a href="#">Acties</a></li>


  </ul>


        </div>

    <div>
    <img src={BackGround} className="bgimage"/>
        </div>

<div className="servicesbox">
<div className="servicescontainer">
      <div className="intro pb-4">
        <div className="container">
          <h1 className='colouredletters'>Car Service Twente</h1>
          <p>
        Bied een complete service aan voor alle automerken. Van diagnose tot onderhoud en reparatie. In de meeste gevallen klaar terwijl u wacht.

    </p>

        </div>

      </div>
        </div>
</div>




        <div className="container pt-8 pt-md-10 ">
        <div className="row justify-content-start">
          <div className="col-12 ">
            <h2 className="title-3 text-dark mb-3 landing">Onze Services</h2>
          </div>



    {markdown.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>


          ))}



        </div>
      </div>



    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
