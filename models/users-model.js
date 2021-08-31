const knex = require('../database/connection');
const bcrypt = require('bcrypt');

class User {
    async findAll(){
        try{
            var result = await knex.select(['id','name', 'email', 'cpf', 'registration', 'role']).table('users');
            return result
        }catch(err){
            console.log(err);
            return [];
        }
    }
    async findById(id){
        try{
            var result = await knex.select(['id', 'name', 'email', 'cpf', 'registration', 'role']).where({id:id}).table('users');
            return result;
        }catch(err){
            console.log(err);
            return undefined;
        }
    }
    async findByEmail(email){
        try{
            var result = await knex.select(['id', 'name', 'email', 'cpf', 'registration', 'role']).where({email:email}).table('users');
        }catch(err){
            return undefined;
        }
    }
    async new(name, email, password, cpf, registration, role){
        try{
            var hash = await bcrypt.hash(password, 10);
            await knex.insert({name,email,password: hash, cpf, registration, role: 0 }).table('users')
        }catch(err){
            console.log(err)
        }
    }
    async findEmail(email){
        try{
            var result = await knex.select("*").from('users').where({email: email})
        }catch(err){
            console.log(err)
            return false;
        }
    }
    
}