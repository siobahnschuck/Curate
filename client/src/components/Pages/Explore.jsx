import React, { useEffect } from 'react'
import { connect } from 'react-redux'
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
    <div>
      Explore page
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)