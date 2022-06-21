
module.exports = class{
    static get = () =>{
        return pool.query(`SELECT name, serial, state, type, user, dt_cor FROM info order by dt_reg DESC`)
    }
}