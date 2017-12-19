module.exports = (query) => async (res) => {
    try {
        const result = await query();

        res.status(200).json(result);
    } catch (ex) {
        res.status(501).json(ex);
    }
};