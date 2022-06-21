module.exports = class{
    static delete = (idNm) =>{
        return pool.query("delete from info where id in (?)",[idNm])
    }
}