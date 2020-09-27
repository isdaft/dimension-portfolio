import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import karate_france from '/images/karate_france.jpg'
import campania from '../images/campania.jpg'
import hemi from '../videos/hemi.mp4'
import flux from '../videos/flux.mp4'
import express from '../videos/express.mp4'
import campania_video from '../videos/campania.mp4'
import derek from '../videos/derekv1.webm'
import derekv1 from '../images/derekv1.png'
import alliedv1 from '../videos/allied.webm'
import allied from '../images/allied.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Why WabWu?</h2>
          
          <p>
            You may be wondering, what in the world is wabwu?
            Simply put - it is the embodiment of one of the greatest 
            pursuits when picking a domain name: the less amount of characters, 
            the higher your internet presence status becomes. 
          </p>
          <p>
            Most 5 character and below domains run for thousands of dollars - 
            this domain however, was not thousands of dollars. This domain, 
            means absolutely nothing. 
          </p>
          <p>
            But if it did mean something - what would it mean? It can mean anything
            you want it to mean. 
          </p>
          <p>
            For me, it is a means of expressing myself, my passions, my skills, and having fun with it.
          </p>
          <span className="image main">
            <img src="https://media1.tenor.com/images/ec362b7b1ee6a9d39db58d8f51c03f0c/tenor.gif?itemid=11856488" alt="" />
          </span>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          
          <div className="work-grid">

            <div className="item">
              <div className="itemImage">
                
                <a target="_blank" href="https://hemisphericinstitute.org/">
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 46" width="135" height="46"><path class="cls-1" d="M57.88,9.71h5.28l12.26,16v-16H81V35.78H76.1L63.5,19.08v16.7H57.88Z"></path><path class="cls-1" d="M94,25.56l-10-15.85h6.64l6.3,10.56,6.3-10.56h6.46l-10,15.68V35.78H93.8V25.56Z"></path><path class="cls-1" d="M112.19,24.7v-15H118V24.53c0,4.26,2,6.48,5.61,6.48s5.62-2.05,5.62-6.31v-15H135V24.53c0,7.84-4.43,11.76-11.41,11.76C116.44,36.29,112.19,32.37,112.19,24.7Z"></path><path class="cls-1" d="M46,46H0V0H46V46ZM21.45,40.55c0,.34.68.51.85,0l1.53-12.78H19.92l1.53,12.78ZM25.2,26.92V25H18.56v1.88ZM23.32,24c8.34.34,9-7.32,9-10.22h0c-.17.68-1.37,2.73-4.43,4.09A7.38,7.38,0,0,0,23.32,24Zm-.85-.51c1.36-6.3,6.47-6.47,7-7.67.68-1.87-.68-5.28-1-5.62h-.17A11.15,11.15,0,0,1,25.54,14c-1,.85-5.45,4.26-3.07,9.54Zm-1,.34c-2.89-6,2.89-9.88,3.75-10.73.17-.17.17-.17.17-.34A15.55,15.55,0,0,0,24,7.33h-.17c-.51,1.87-3.06,4.6-3.57,5.28-4.43,5.11-3.41,8.35,1.19,11.24ZM20.26,24c-4.77-2.89-4.26-6.81-2.21-9.71V14a7.46,7.46,0,0,0-1.2-2.9c0-.17-.17-.17-.17,0,0,.86-1,2.9-2.38,5.12-1.36,2.38-1.36,7.66,6,7.83Z"></path></svg>
                  <div className="itemImageOverlay"></div>
                  <video preload='auto' loop autoPlay muted src={hemi}></video>
                </a>

              </div>
              <div className="itemDesc">
                <h4>
                  <a target="_blank" href="https://hemisphericinstitute.org/">Hemispheric Institute</a>
                </h4>
                <p>NYU Hemispheric Institute Facelift</p>
              </div>
              <div className="itemLink">
                <p className="learnmore">
                  <a href="https://hemisphericinstitute.org/" target="_blank">View Live</a>
                </p>
              </div>
            </div>

            <div className="item">
              <div className="itemImage">
                
                <a target="_blank" href="https://flux.rheemwebsuite.com/">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 103 103" height="46">
                    <path fill-rule="evenodd" fill="rgb(228, 0, 43)" d="M51.439,102.926 C23.038,102.889 0.045,79.837 0.083,51.437 C0.120,23.036 23.173,0.043 51.572,0.080 C79.972,0.117 102.966,23.171 102.929,51.571 C102.892,79.971 79.839,102.964 51.439,102.926 ZM88.007,81.588 C89.483,81.590 90.763,80.470 90.766,78.778 C90.768,77.086 89.490,75.963 88.014,75.962 C86.528,75.960 85.245,77.079 85.243,78.771 C85.240,80.373 86.391,81.585 88.007,81.588 ZM36.338,37.391 C35.851,24.930 27.254,19.333 16.475,19.240 C15.266,19.230 13.650,19.273 12.443,19.434 L12.359,83.555 L17.523,83.561 L17.559,56.629 L44.145,87.063 L49.553,87.070 L25.333,57.894 C33.515,53.777 36.696,46.543 36.338,37.391 ZM45.430,40.946 C44.256,41.103 43.193,41.760 42.411,42.697 L42.467,1.760 C41.026,2.019 39.610,2.343 38.215,2.725 L38.123,72.568 L42.374,72.574 L42.407,47.680 C42.407,47.680 42.409,45.729 43.934,45.732 C45.512,45.735 45.510,47.685 45.510,47.685 L45.480,72.578 L49.727,72.583 L49.761,47.690 L49.763,45.154 C49.767,42.512 47.828,40.629 45.430,40.946 ZM57.350,40.941 C54.022,40.938 51.321,45.259 51.305,56.925 C51.291,68.592 53.981,72.918 57.309,72.923 C60.107,72.927 62.463,69.869 63.150,61.946 L59.073,61.410 C58.917,66.237 58.437,68.128 57.315,68.126 C55.976,68.125 55.591,65.459 55.557,58.381 L59.114,58.385 L63.349,58.392 L63.350,56.941 C63.366,45.275 60.676,40.946 57.350,40.941 ZM71.008,40.960 C67.684,40.955 64.981,45.278 64.965,56.944 C64.951,68.610 67.643,72.937 70.968,72.941 C73.767,72.944 76.124,69.887 76.811,61.965 L72.734,61.429 C72.579,66.255 72.099,68.146 70.973,68.145 C69.637,68.143 69.251,65.476 69.217,58.399 L72.772,58.404 L77.008,58.409 L77.009,56.960 C77.025,45.294 74.335,40.964 71.008,40.960 ZM93.620,40.991 C92.079,40.989 90.735,41.732 90.053,42.825 C89.371,41.730 88.036,40.983 86.496,40.982 C84.968,40.980 83.639,41.557 82.952,42.638 L82.943,42.608 C82.599,40.929 80.979,40.858 79.025,41.164 C78.914,41.181 78.802,41.203 78.695,41.226 L78.652,72.621 L82.903,72.627 L82.936,47.733 C82.936,47.733 82.938,45.783 84.463,45.786 C86.043,45.787 86.041,47.738 86.041,47.738 L86.011,72.632 L90.258,72.637 L90.292,47.743 C90.292,47.743 90.293,45.793 91.817,45.795 C93.397,45.797 93.395,47.748 93.395,47.748 L93.365,72.640 L97.614,72.647 L97.647,47.753 L97.651,45.217 L97.663,44.489 C97.654,42.595 95.855,40.994 93.620,40.991 ZM71.003,45.758 C72.285,45.759 72.719,48.237 72.784,54.710 L69.230,54.706 C69.307,48.232 69.718,45.756 71.003,45.758 ZM57.344,45.739 C58.624,45.741 59.059,48.218 59.126,54.693 L55.570,54.687 C55.647,48.214 56.060,45.737 57.344,45.739 ZM18.695,54.487 C18.369,54.514 17.830,54.468 17.561,54.449 L17.601,24.598 C18.104,24.600 18.610,24.526 19.111,24.531 C27.336,24.611 31.688,30.841 31.679,38.643 C31.668,46.633 27.073,53.813 18.695,54.487 ZM88.013,76.452 C89.216,76.454 90.165,77.409 90.163,78.778 C90.162,80.153 89.211,81.100 88.007,81.098 C86.670,81.096 85.844,80.050 85.846,78.772 C85.848,77.402 86.797,76.450 88.013,76.452 ZM87.452,80.382 L87.454,79.051 L87.935,79.052 L88.738,80.383 L89.318,80.384 L88.447,79.016 C88.916,78.965 89.260,78.731 89.260,78.167 C89.262,77.535 88.879,77.272 88.127,77.271 L86.946,77.269 L86.941,80.381 L87.452,80.382 ZM88.749,78.128 C88.749,78.580 88.410,78.617 88.027,78.616 L87.456,78.615 L87.456,77.706 L88.072,77.706 C88.382,77.707 88.749,77.753 88.749,78.128 Z"></path>
                  </svg>
                  <div className="itemImageOverlay"></div>
                  <video preload='auto' loop autoPlay muted src={flux}></video>
                </a>

              </div>
              <div className="itemDesc">
                <h4>
                  <a target="_blank" href="https://flux.rheemwebsuite.com/">Flux</a>
                </h4>
                <p>Rheem Websuite: Plumbing Contractor Template</p>
              </div>
              <div className="itemLink">
                <p className="learnmore">
                  <a href="https://flux.rheemwebsuite.com/" target="_blank">View Live</a>
                </p>
              </div>
            </div>

            <div className="item">
              <div className="itemImage">
                
                <a href="https://express.rheemwebsuite.com/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 103 103" height="46">
                                    <path fill-rule="evenodd" fill="rgb(228, 0, 43)" d="M51.439,102.926 C23.038,102.889 0.045,79.837 0.083,51.437 C0.120,23.036 23.173,0.043 51.572,0.080 C79.972,0.117 102.966,23.171 102.929,51.571 C102.892,79.971 79.839,102.964 51.439,102.926 ZM88.007,81.588 C89.483,81.590 90.763,80.470 90.766,78.778 C90.768,77.086 89.490,75.963 88.014,75.962 C86.528,75.960 85.245,77.079 85.243,78.771 C85.240,80.373 86.391,81.585 88.007,81.588 ZM36.338,37.391 C35.851,24.930 27.254,19.333 16.475,19.240 C15.266,19.230 13.650,19.273 12.443,19.434 L12.359,83.555 L17.523,83.561 L17.559,56.629 L44.145,87.063 L49.553,87.070 L25.333,57.894 C33.515,53.777 36.696,46.543 36.338,37.391 ZM45.430,40.946 C44.256,41.103 43.193,41.760 42.411,42.697 L42.467,1.760 C41.026,2.019 39.610,2.343 38.215,2.725 L38.123,72.568 L42.374,72.574 L42.407,47.680 C42.407,47.680 42.409,45.729 43.934,45.732 C45.512,45.735 45.510,47.685 45.510,47.685 L45.480,72.578 L49.727,72.583 L49.761,47.690 L49.763,45.154 C49.767,42.512 47.828,40.629 45.430,40.946 ZM57.350,40.941 C54.022,40.938 51.321,45.259 51.305,56.925 C51.291,68.592 53.981,72.918 57.309,72.923 C60.107,72.927 62.463,69.869 63.150,61.946 L59.073,61.410 C58.917,66.237 58.437,68.128 57.315,68.126 C55.976,68.125 55.591,65.459 55.557,58.381 L59.114,58.385 L63.349,58.392 L63.350,56.941 C63.366,45.275 60.676,40.946 57.350,40.941 ZM71.008,40.960 C67.684,40.955 64.981,45.278 64.965,56.944 C64.951,68.610 67.643,72.937 70.968,72.941 C73.767,72.944 76.124,69.887 76.811,61.965 L72.734,61.429 C72.579,66.255 72.099,68.146 70.973,68.145 C69.637,68.143 69.251,65.476 69.217,58.399 L72.772,58.404 L77.008,58.409 L77.009,56.960 C77.025,45.294 74.335,40.964 71.008,40.960 ZM93.620,40.991 C92.079,40.989 90.735,41.732 90.053,42.825 C89.371,41.730 88.036,40.983 86.496,40.982 C84.968,40.980 83.639,41.557 82.952,42.638 L82.943,42.608 C82.599,40.929 80.979,40.858 79.025,41.164 C78.914,41.181 78.802,41.203 78.695,41.226 L78.652,72.621 L82.903,72.627 L82.936,47.733 C82.936,47.733 82.938,45.783 84.463,45.786 C86.043,45.787 86.041,47.738 86.041,47.738 L86.011,72.632 L90.258,72.637 L90.292,47.743 C90.292,47.743 90.293,45.793 91.817,45.795 C93.397,45.797 93.395,47.748 93.395,47.748 L93.365,72.640 L97.614,72.647 L97.647,47.753 L97.651,45.217 L97.663,44.489 C97.654,42.595 95.855,40.994 93.620,40.991 ZM71.003,45.758 C72.285,45.759 72.719,48.237 72.784,54.710 L69.230,54.706 C69.307,48.232 69.718,45.756 71.003,45.758 ZM57.344,45.739 C58.624,45.741 59.059,48.218 59.126,54.693 L55.570,54.687 C55.647,48.214 56.060,45.737 57.344,45.739 ZM18.695,54.487 C18.369,54.514 17.830,54.468 17.561,54.449 L17.601,24.598 C18.104,24.600 18.610,24.526 19.111,24.531 C27.336,24.611 31.688,30.841 31.679,38.643 C31.668,46.633 27.073,53.813 18.695,54.487 ZM88.013,76.452 C89.216,76.454 90.165,77.409 90.163,78.778 C90.162,80.153 89.211,81.100 88.007,81.098 C86.670,81.096 85.844,80.050 85.846,78.772 C85.848,77.402 86.797,76.450 88.013,76.452 ZM87.452,80.382 L87.454,79.051 L87.935,79.052 L88.738,80.383 L89.318,80.384 L88.447,79.016 C88.916,78.965 89.260,78.731 89.260,78.167 C89.262,77.535 88.879,77.272 88.127,77.271 L86.946,77.269 L86.941,80.381 L87.452,80.382 ZM88.749,78.128 C88.749,78.580 88.410,78.617 88.027,78.616 L87.456,78.615 L87.456,77.706 L88.072,77.706 C88.382,77.707 88.749,77.753 88.749,78.128 Z"></path>
                                </svg>
                  <div className="itemImageOverlay"></div>
                  <video preload='auto' loop autoPlay muted src={express}></video>
                </a>

              </div>
              <div className="itemDesc">
                <h4>
                  <a href="https://express.rheemwebsuite.com/" target="_blank">Express</a>
                </h4>
                <p>Rheem Websuite: Plumbing Contractor Template</p>
              </div>
              <div className="itemLink">
                <p className="learnmore">
                  <a href="https://express.rheemwebsuite.com/" target="_blank">View Live</a>
                </p>
              </div>
            </div>

            <div className="item">
              <div className="itemImage">
                
                <a href="https://www.campaniainternational.com/" target="_blank">
                  <img className="itemCompanyLogo" src={campania} style={{'padding': '60px'}}/>
                  <div className="itemImageOverlay"></div>
                  <video preload='auto' loop autoPlay muted src={campania_video}></video>
                </a>

              </div>
              <div className="itemDesc">
                <h4>
                  <a href="https://www.campaniainternational.com/" target="_blank">Campania International</a>
                </h4>
                <p>Online Catalog: Fountain & Planter retailer</p>
              </div>
              <div className="itemLink">
                <p className="learnmore">
                  <a href="https://www.campaniainternational.com/" target="_blank">View Live</a>
                </p>
              </div>
            </div>


            <div className="item">
              <div className="itemImage">
                
                <a href="http://www.alliedwells.com" target="_blank">
                  <img className="itemCompanyLogo" src={allied} style={{'borderRadius': '0%'}}/>
                  <div className="itemImageOverlay"></div>
                  <video preload='auto' loop autoPlay muted src={alliedv1}></video>
                </a>

              </div>
              <div className="itemDesc">
                <h4>
                  <a href="http://www.alliedwells.com/" target="_blank">Allied Wells</a>
                </h4>
                <p>Allied Wells 2.0</p>
              </div>
              <div className="itemLink">
                <p className="learnmore">
                  <a href="http://www.alliedwells.com/" target="_blank">View Live</a>
                </p>
              </div>
            </div>

            <div className="item">
              <div className="itemImage">
                
                <a href="http://www.derekeverhart.com/" target="_blank">
                  <img className="itemCompanyLogo" src={derekv1} style={{'padding': '60px'}}/>
                  <div className="itemImageOverlay"></div>
                  <video preload='auto' loop autoPlay muted src={derek}></video>
                </a>

              </div>
              <div className="itemDesc">
                <h4>
                  <a href="http://www.derekeverhart.com/" target="_blank">Derek Everhart Photography</a>
                </h4>
                <p>Photography Portfolio Version 1.0</p>
              </div>
              <div className="itemLink">
                <p className="learnmore">
                  <a href="http://www.derekeverhart.com/" target="_blank">View Live</a>
                </p>
              </div>
            </div>



          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={karate_france} alt="" />
            <p style={{ textAlign: 'right', fontSize: 'calc(12px + .5 * ((100vw - 320px) / 680))' }}>"Ben Normandy France 2017" - Photo by Max Ashby</p>
          </span>
          <p>
            Born in the United States of America, I am a dual-citizen to both France and the United States of America. I speak both English and French
            fluently. Currently living on the east coast of the United States, and spend the majority of the time working remote jobs, and exploring nature.
          </p>
          <p>
            Working all things IT developed from an early age, where i wanted to learn how to build a computer - so that I could overclock my Dell family machine.
            This obsession to overclock my family machine, was due to the fact that I wanted to play video games that my machine at the time could not run. This eventually
            turned into a hobby - to which I applied this knowledge later in life to kick start a career.
          </p>
          <p>
            I ended up choosing to go to school for Ecology (BS Biology/Ecology) - because I simply wanted to know how my environment around me worked. Similar to how
            as a teenager, I wanted to know how a computer worked.
          </p>
          <p>
            Over time and experience - I taught myself [put simply] how to make websites using free and available information provided by the internet. 
            Bringing us to today - where I continue to learn new things and apply them throughout my life wherever I can.
          </p>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
