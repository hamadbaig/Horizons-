import React from 'react';
import { NavLink } from 'react-router-dom';
import './Info.css';

const Info = ({ destination }) => {
  return (
      <>
      { destination && (
       <>
    <div className="custom-destination-details-container">
      <div className="custom-destination-header">
        <img src={destination.imageUrl} alt={destination.title} className="custom-destination-image" />
        <div className="custom-destination-info">
          <h2 className="custom-destination-title">{destination.title}</h2>
          <p className="custom-location">{destination.location}</p>
          <p className="custom-reviews">Avis des clients ⭐⭐⭐⭐⭐</p>
          <p className="custom-summary">{destination.summary}</p>
        </div>
      </div>

      <div className="custom-destination-content">
        {destination.activities.map((activity, index) => (
          <div key={index} className="custom-activity">
            <img src={activity.imageUrl} alt={activity.title} className="custom-activity-image" />
            <div className="custom-activity-info">
              <h3 className="custom-activity-title">{activity.title}</h3>
              <p className="custom-activity-description">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="custom-buy-button-container">
        <NavLink to="#" className="custom-btn-buy">
          Acheter cette destination
        </NavLink>
      </div>

      <div className="custom-comments-section">
        <h3 className="custom-comments-title">Commentaires</h3>
        <form className="custom-comment-form">
          <textarea placeholder="Laissez un commentaire" className="custom-comment-input"></textarea>
          <button type="submit" className="custom-btn-submit">Soumettre</button>
        </form>
        <div className="custom-comments-list">
          {destination.comments.map((comment, index) => (
            <div key={index} className="custom-comment">
              <p><strong>{comment.author}:</strong> {comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
       </>
  )}
    
  </>
  );
};

export default Info;
