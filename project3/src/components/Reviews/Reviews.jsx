import { useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaThumbsUp,
  FaThumbsDown
} from "react-icons/fa";
import "./Reviews.css";

export default function Reviews() {
  const [likes, setLikes] = useState([1, 1, 1]);
  const [dislikes, setDislikes] = useState([0, 0, 0]);
  const [userActions, setUserActions] = useState([
    { liked: false, disliked: false }, 
    { liked: false, disliked: false }, 
    { liked: false, disliked: false }  
  ]);

  const handleLike = (index) => {
    const newUserActions = [...userActions];
    const newLikes = [...likes];
    const newDislikes = [...dislikes];

    if (newUserActions[index].liked) {
      newUserActions[index].liked = false;
      newLikes[index]--;
    } else {
      if (newUserActions[index].disliked) {
        newUserActions[index].disliked = false;
        newDislikes[index]--;
      }
      newUserActions[index].liked = true;
      newLikes[index]++;
    }

    setUserActions(newUserActions);
    setLikes(newLikes);
    setDislikes(newDislikes);
  };

  const handleDislike = (index) => {
    const newUserActions = [...userActions];
    const newLikes = [...likes];
    const newDislikes = [...dislikes];

    if (newUserActions[index].disliked) {
      newUserActions[index].disliked = false;
      newDislikes[index]--;
    } else {
      if (newUserActions[index].liked) {
        newUserActions[index].liked = false;
        newLikes[index]--;
      }
      newUserActions[index].disliked = true;
      newDislikes[index]++;
    }

    setUserActions(newUserActions);
    setLikes(newLikes);
    setDislikes(newDislikes);
  };

  return (
    <section className="reviews-section">
      <div className="reviews-wrapper">

        <h2 className="reviews-heading">Product Reviews</h2>

        <div className="reviews-summary">

          <div className="reviews-rating">
            <span className="reviews-rating-value">4.5</span>
            <span className="reviews-rating-max">/5</span>
          </div>

          <div className="reviews-stars-block">
            <div className="reviews-stars">
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaRegStar className="star-icon" />
            </div>
            <p className="reviews-count">614 Reviews</p>
          </div>

        </div>

        <div className="reviews-cards">

          <div className="review-card">

            <div className="review-card-header">
              <img className="review-avatar" src="/img/user1.jpg" alt="user" />

              <div className="review-user-info">
                <h4 className="review-user-name">Veronica</h4>
                <span className="review-user-verified">
                  ✔ Confirmed purchase
                </span>
              </div>
            </div>

            <div className="review-card-stars">
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
            </div>

            <h5 className="review-title">TOP!</h5>

            <p className="review-text">
              Everything is great! Returns sent very easily and a new product
              was sent again. Fits perfectly, corresponds exactly to the image
              on the website. Fast delivery and great service.
            </p>

            <div className="review-footer">
              <div className="review-actions">
                <button 
                  className={`review-like ${userActions[0].liked ? 'active' : ''}`}
                  onClick={() => handleLike(0)}
                >
                  <FaThumbsUp />
                  <span>{likes[0]}</span>
                </button>
                <button 
                  className={`review-dislike ${userActions[0].disliked ? 'active' : ''}`}
                  onClick={() => handleDislike(0)}
                >
                  <FaThumbsDown />
                  <span>{dislikes[0]}</span>
                </button>
              </div>
            </div>

          </div>

          <div className="review-card">

            <div className="review-card-header">
              <img className="review-avatar" src="/img/user2.jpg" alt="user" />

              <div className="review-user-info">
                <h4 className="review-user-name">Jessica</h4>
                <span className="review-user-verified">
                  ✔ Confirmed purchase
                </span>
              </div>
            </div>

            <div className="review-card-stars">
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaRegStar className="star-icon" />
            </div>

            <h5 className="review-title">TOP!</h5>

            <p className="review-text">
              Everything is great! Returns sent very easily and new product
              sent again. Fits perfectly and the quality is excellent.
            </p>

            <div className="review-footer">
              <div className="review-actions">
                <button 
                  className={`review-like ${userActions[1].liked ? 'active' : ''}`}
                  onClick={() => handleLike(1)}
                >
                  <FaThumbsUp />
                  <span>{likes[1]}</span>
                </button>
                <button 
                  className={`review-dislike ${userActions[1].disliked ? 'active' : ''}`}
                  onClick={() => handleDislike(1)}
                >
                  <FaThumbsDown />
                  <span>{dislikes[1]}</span>
                </button>
              </div>
            </div>

          </div>

          <div className="review-card">

            <div className="review-card-header">
              <img className="review-avatar" src="/img/user3.jpg" alt="user" />

              <div className="review-user-info">
                <h4 className="review-user-name">Monika</h4>
                <span className="review-user-verified">
                  ✔ Confirmed purchase
                </span>
              </div>
            </div>

            <div className="review-card-stars">
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
            </div>

            <h5 className="review-title">Super!</h5>

            <p className="review-text">
              Very comfortable glasses. No fogging, perfect fit and stylish
              look. Magnets work well and lens replacement is easy.
            </p>

            <div className="review-footer">
              <div className="review-actions">
                <button 
                  className={`review-like ${userActions[2].liked ? 'active' : ''}`}
                  onClick={() => handleLike(2)}
                >
                  <FaThumbsUp />
                  <span>{likes[2]}</span>
                </button>
                <button 
                  className={`review-dislike ${userActions[2].disliked ? 'active' : ''}`}
                  onClick={() => handleDislike(2)}
                >
                  <FaThumbsDown />
                  <span>{dislikes[2]}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        <button className="reviews-button">
          See more reviews
        </button>

      </div>
    </section>
  );
}