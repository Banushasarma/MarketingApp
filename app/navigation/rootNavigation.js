import React from 'react'

const navigationRef = React.createRef()

const navigate = (name, parmas) =>
    navigationRef.current?.navigate(name, parmas)

export default {
    navigate
}