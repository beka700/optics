import './pro4.css'
import s1 from '../../assets/Stories.png'
import s2 from '../../assets/Stories (1).png'
import s3 from '../../assets/Stories (2).png'
import s4 from '../../assets/img4.png'
import { useNavigate } from 'react-router-dom'

export default function Pro4() {
  const navigate = useNavigate()

  const handleDiscoverAll = () => {
    navigate('/stories')
  }

  const stories = [
    { 
      id: 1, 
      image: s1, 
      title: "The perfect running training: Some advice for beginners",
    },
    { 
      id: 2, 
      image: s2, 
      title: "What are the differences between the lenses?",
    },
    { 
      id: 3, 
      image: s3, 
      title: "What is important in sports glasses?",
    },
    { 
      id: 4, 
      image: s4, 
      title: "Back to the roots – Salzburg",
    }
  ]

  const handleStoryClick = (storyId) => {
    navigate(`/article/${storyId}`)
  }

  const handleKeyPress = (e, storyId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleStoryClick(storyId)
    }
  }

  return (
    <section className="pro4">
      <div className="pro4__container">
        <div className="pro4__header">
          <h2 className="pro4__title">STORIES</h2>
          <button 
            className="pro4__link" 
            onClick={handleDiscoverAll}
            aria-label="Discover all our stories"
          >
            Discover all our stories ›
          </button>
        </div>

        <div className="pro4__cards">
          {stories.map((story) => (
            <article 
              key={story.id} 
              className="pro4__card"
              onClick={() => handleStoryClick(story.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => handleKeyPress(e, story.id)}
              aria-label={`Read story: ${story.title}`}
            >
              <img 
                className="pro4__img" 
                src={story.image} 
                alt={story.title} 
                loading="lazy"
              />
              <p className="pro4__text">
                {story.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}