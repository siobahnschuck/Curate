import React, { useEffect } from 'react'
import '../../css/Explore.css'
import { connect } from 'react-redux'
import GalleryCard from '../gallery/GalleryCard'
import {
  getAllGallery
} from '../../store/actions/GalleryActions'

const mapStateToProps = ({ galleryState }) => {
  return { galleryState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllGalleries: () => dispatch(getAllGallery())
  }
}

const Explore = (props) => {
  useEffect(() => {
    props.getAllGalleries()
  }, [])
  return (
    <div className="explore-container">
      Explore page
      <div className="ex-gall-card">
        {props.galleryState.allGalleries.length ? props.galleryState.allGalleries[0].map((gallery) => (
          <div className="card">
            <h1>{gallery.exhibition_title}</h1>
            <p>{gallery.description}</p>
          </div>
        )) : null}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)