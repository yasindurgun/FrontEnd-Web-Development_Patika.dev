function User({name, surname, age, isLoggedIn, friends}) {
    return (
        <>
            <div>{name} {surname}</div>
            {
                friends.map((friend) => (<div>{friend}</div>))
            }
        </>
    );
}

export default User;