import React, { useContext } from 'react';
// React اور useContext کو import کر رہے ہیں

import UserContext from '../context/userContext';
// UserContext کو import کر رہے ہیں تاکہ globally user کی information access کر سکیں

function Profile() {
  const { user } = useContext(UserContext);
  // UserContext سے user کو extract کر رہے ہیں

  // اگر user موجود نہیں ہے (یعنی login نہیں کیا)، تو یہ message show کریں گے
  if (!user) return <div>Please login</div>;

  // اگر user موجود ہے تو Welcome message show کریں گے
  return <div>Welcome {user.username}</div>;
}

export default Profile;
// Profile component کو export کر رہے ہیں تاکہ اسے app میں کہیں بھی use کر سکیں
