<script type="text/babel">
    var names = ['yhw','ws','xhj','zsl'];
    ReactDOM.render(
      <ol>
      {
      names.map(function(name){
        return <li>name is {name}</li>
      })
      }
      </ol>,
      document.getElementById('example')
    );

    
    </script>