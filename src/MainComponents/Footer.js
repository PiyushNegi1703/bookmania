import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer>
        <div style={{width : '100%', display : 'flex', flexWrap : 'wrap', alignContent : 'center'}}>
            <hr style={{width : '98%'}} />
        </div>

        <div>
            <h3>Made With React By Piyush!</h3>

            <div>
                <a href="https://github.com/PiyushNegi1703" rel='noreferrer' target='_blank' style={{color : 'black', marginRight : '5px'}}><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/negi-2k05/" rel='noreferrer' target='_blank' style={{color : 'black'}}><LinkedInIcon /></a>
            </div>
        </div>
    </footer>
  )
}
