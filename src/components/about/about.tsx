import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Main } from "../main/main";
import { Sidebar } from "../sidebar/sidebar";
import './about.css'
export function About() {
    return (
        <div className="homePage">
            <Header></Header>
        <Sidebar></Sidebar>
        <main className="about-page">
            <section className="about-content" dir="rtl">
                <p>
                    ברוכים הבאים לחנות הרכבים שלנו!
                    <br></br>
                    אנו מתמחים במכירת רכבים חדשים ומשומשים,          <br></br>
                    עם שירות אישי וליווי מקצועי
                    מהשלב הראשון ועד מסירת המפתח.
                </p>
                <p>
                    בחנות תמצאו מגוון רחב של מותגים ודגמים,
                    <br></br>
                    אפשרויות מימון גמישות,
                    ובדיקות איכות קפדניות לכל רכב.
                </p>
                <p>
                    הצוות שלנו כאן כדי להבטיח שתרכשו את הרכב המתאים ביותר לצרכים ולתקציב שלכם.
                </p>
            </section>
        </main>
        <Footer></Footer>
</div>
    )
}