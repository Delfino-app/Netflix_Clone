import db from "./db.js";
export default{

    async getHome(){

        return [
            {
                slug:"Action",
                title:"Acção",
                itens: db.action
            },
            {
                slug:"Drama",
                title:"Drama",
                itens:db.drama
            },
            {
                slug:"Romance",
                title:"Romance",
                itens:db.romance
            },
            {
                slug:"Comedian",
                title:"Comédia",
                itens:db.comedian
            },
            {
                slug:"Others",
                title:"Outros",
                itens:db.others
            }
        ]
    }

}