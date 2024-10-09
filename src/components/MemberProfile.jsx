/* eslint-disable react/prop-types */

const MemberProfile = ({img, name, designation}) => {
  return (
    <div>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{designation}</p>
    </div>
  )
}

export default MemberProfile;