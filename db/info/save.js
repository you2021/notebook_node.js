

module.exports = class{
    static save = (name, serial, state, type, user) =>{
        return pool.query(`INSERT INTO info(name, serial, state, type, user)VALUES(?,?,?,?,?)`,
                    [name, serial, state, type, user])
    }
}