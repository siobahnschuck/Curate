import React, { useEffect } from 'react'
import '../../css/Explore.css'
import { connect } from 'react-redux'
import {
  getAllGallery, getGalleryDrawings
} from '../../store/actions/GalleryActions'
import ExploreGallery from '../gallery/ExploreGallery'
import { getDrawings } from '../../store/actions/DrawingActions'
import { useHistory } from 'react-router'

const mapStateToProps = ({ galleryState }) => {
  return { galleryState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllGalleries: () => dispatch(getAllGallery()),
    getDrawings: (id) => dispatch(getGalleryDrawings(id))
  }
}

const Explore = (props) => {
  const history = useHistory()
  useEffect(() => {
    props.getAllGalleries()
    //eslint-disable-next-line
  }, [])

  const handleExpand = (id) => {
    history.push(`/gallery/details/${id}`)
    getDrawings(id)
  }

  return (
    <div className="explore">
      <div className="explore-card">
        <ExploreGallery
          allGalleries={props.galleryState.allGalleries}
          handleExpand={handleExpand}
        />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)