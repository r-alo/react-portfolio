import Container from "react-bootstrap/esm/Container";

function Footer () {
    return (
        <Container>
            <div class="footer" id="footer">
                <h2>Contact</h2>
                <ul>
                    <li><a href="mailto:kevinralo@gmail.com">kevinralo@gmail.com</a></li>
                    <li>+52 (33) 1603 9017</li>
                    <li><a href="https://github.com/r-alo" target="_blank" rel=""><img src="assets/images/github_PNG58.png" alt="Kevin's GitHub" class="logoGh"/></a></li>
                    <li><a href="https://www.instagram.com/ralo._/" target="_blank" rel=""><img src="assets/images/029-instagram.png" alt="Kevin's Instagram" class="logoIg"/></a></li>
                </ul>
            </div>
        </Container>
    );
}

export default Footer;