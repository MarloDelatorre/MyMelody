<template>
    <div class="container">
        <header>
            <h1>{{ headline }}</h1>
            <h2>{{ subhead }}</h2>
        </header>
        <div class="auth">
            <button class="signup">Sign Up</button>
            <div class="divider">
                <hr/>
                <p>Already have an account?</p>
                <hr/>
            </div>
            <button class="login">Log In</button>
        </div>
        <img class="background" src="../assets/PersonMusic.png"/>
    </div>
</template>

<script>
export default {
  name: 'landing',
  data: function() {
      return {
          headline: 'Discover and share music with your friends.',
          subhead: 'The easiest way to search for your favorite melodies.'
      }
  }
}
</script>

<style scoped>
    header {
        color: #ff8b55;
        width: 500px;
    }

    h1 {
        font-weight: 700;
        font-size: 40px;
    }

    h2 {
        font-weight: 200;
        font-size: 27px;
        width: 400px;
        margin: 60px 0;
    }
    
    button {
        box-sizing: border-box;
        width: 400px;
        padding: 20px 0;
        border: none;
        font-size: 17px;
        font-weight: 700;
        border-radius: 35px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    .signup {
        color: #fff;
        background-color: #d34084;
    }

    .login {
        color: #d34084;
        background-color: #fff;
        border: 2px solid #d34084;
    }

    .auth {
        padding: 60px 0;
    }

    .divider {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
    }

    hr {
        margin: 60px 0;
        width: 30px;
    }

    p {
        margin: 0 30px;
    }
    
    .background {
        position: absolute;
        right: 0px;
        bottom: 0px;
        z-index: -1;
    }
</style>
