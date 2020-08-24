import * as React from 'react'

// export const useMyHook = () => {
//   let [{
//     counter
//   }, setState] = React.useState({
//     counter: 0
//   })

//   React.useEffect(() => {
//     let interval = window.setInterval(() => {
//       counter++
//       setState({counter})
//     }, 1000)
//     return () => {
//       window.clearInterval(interval)
//     }
//   }, [])

//   return counter
// }

export const ImpersonationsStateHook = (defaultImpersonations) => {
  const [impersonations, setImpersonation] = React.useState(
    defaultImpersonations
  )

  const syncImpersonations = (newImpersonation) => {
    // TODO this will receive whatever the response is from an API Call
    // This should have a full list of the current users impersonations I guess?
    // That might be too much to send back after very call, unless we set limits?
    setImpersonation({
      ...defaultImpersonations,
      [newImpersonation.id]: newImpersonation
    })
  }

  return [impersonations, syncImpersonations]
}
