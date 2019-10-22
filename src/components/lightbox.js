import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './lightbox.css';

export default class Lightbox extends Component {

	componentDidMount(){

		var body = document.getElementsByTagName("body")[0];

		var defaultIndex = 1;

		function showSlides(n) {

			var i;
			var slides = document.getElementsByClassName("mySlides");

			if (n > slides.length) {

				defaultIndex = 1;

			}

			if (n < 1) {

				defaultIndex = slides.length;

			}

			for (i = 0; i < slides.length; i++) {

				slides[i].style.display = "none";

			}

			slides[defaultIndex-1].style.display = "block";

		}

		showSlides(defaultIndex);

		function openModal(n) {

			document.getElementById("lightbox").style.display = "block";
			body.style.position = "fixed";

			showSlides(defaultIndex = n);

		}

		var col = document.getElementsByClassName("column");
		var i = 0;

		for(i; i < col.length; i++){

			col[i].children[0].onclick = (function(i){

				return function(){

					openModal(i+1);
					console.log(i);

				}

			})(i);

		}

		var prev = document.getElementsByClassName("prev")[0];
		var next = document.getElementsByClassName("next")[0];
		var close = document.getElementsByClassName("close")[0];

		prev.addEventListener("click", function(){

			showSlides(defaultIndex -= 1);

		});

		next.addEventListener("click", function(){

			showSlides(defaultIndex += 1);

		});

		close.addEventListener("click", function(){

			document.getElementById("lightbox").style.display = "none";
			body.style.position = "";

		});

		var dw = document || window;

		dw.onclick = function (event) {

			var modal = document.getElementById("lightbox");

			if (event.target == modal) {

				modal.style.display = "none";
				body.style.position = "";

			}

		}

  }

	render() {

		return (

			<div className="main">
				<div className="row">
					{this.props.images.map((image) => {
						return <div className="column">
							<img src={image.source} alt={image.alttext} className="hover-shadow cursor"/>
						</div>;
					})}
				</div>
				<div id="lightbox" className="modal">
					<span className="close cursor">&times;</span>
					<div className="modal-content">
						{this.props.images.map((image) => {
							return <div className="mySlides">
								<img src={image.source} alt={image.alttext}/>
							</div>;
						})}
						<a className="prev">&#10094;</a>
						<a className="next">&#10095;</a>
					</div>
				</div>
			</div>

    );

  }

}

Lightbox.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			source: PropTypes.string.isRequired
		}).isRequired
	).isRequired
}
