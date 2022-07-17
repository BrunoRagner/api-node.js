const axios = require('axios');
 

module.exports = {
    async luaGithub(request, response){
        const {name} = request.params;
        var nome, bio, avatar_url, html_url, blog, repos_url, login, email, public_repos, public_gists, followers, following, created_at, updated_at;

        await axios.get(`https://api.github.com/users/${name}`).then(function(resposta){
          console.log(resposta.data);

            nome = resposta.data.name;
            site = resposta.data.blog;
            bio = resposta.data.bio;
            avatar_url = resposta.data.avatar_url;
            html_url = resposta.data.html_url;
            repos_url = resposta.data.repos_url;
            login = resposta.data.login;
            email = resposta.data.email;
            public_repos = resposta.data.public_repos;
            public_gists = resposta.data.public_gists;
            followers = resposta.data.followers;
            
           
            return response.send('<html><body><h1>'+nome+'</h1><h1>'+nome+'</h1<p>'+      public_repos+'</p><p>'+email+'</p><p>'+repos_url+'</p><p>'+bio+'</p><p>'+site+'</p><img src="'+avatar_url+'"/><a href="'+html_url+'">'+html_url+'</a></body></html>');
           
          
           

        
        
        }).catch((err) => {
             response.send('<html><body><h1>Usuário +nome+</h1></body></html>' + err);
        
         });

        
    }
}