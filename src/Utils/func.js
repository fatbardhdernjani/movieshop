const getUser = () => {
    if (localStorage.getItem("token")) {
        return "1";
    }
    return 0;
};

export {
    getUser,
}
