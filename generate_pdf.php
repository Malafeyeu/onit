<?php
require 'vendor/autoload.php';

use Dompdf\Dompdf;
use Dompdf\Options;

// Получение данных из POST запроса
$data = json_decode(file_get_contents('php://input'), true);

function generate_pdf($data) {
  // Создание объекта Dompdf
  $options = new Options();
  $options->set('isHtml5ParserEnabled', true);
  $options->set('isRemoteEnabled', true);

  define("DOMPDF_ENABLE_REMOTE", true);

  $dompdf = new Dompdf($options);

  // Создание HTML из данных
  ob_start();
  ?>
  <!DOCTYPE html>
  <html lang="ru">
  <head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <title>CV</title>
    <style>
      html, body, button, input, div,
      span, object, iframe, figure,
      h1, h2, h3, h4, h5, h6, p,
      blockquote, pre, a, code, em, img,
      small, strike, strong, sub, sup, tt,
      b, u, i, ol, ul, li, fieldset, form,
      label, table, caption, tbody, tfoot,
      thead, tr, th, td, main, canvas,
      embed, footer, header, nav, section,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        text-size-adjust: none;
        outline: none;
        border: none;
        background: none;
        text-decoration: none;
        list-style: none;
        cursor: default;
      }
      body {
        width: 100%;
        height: 795px;
        margin: 0;
        font-family: Work Sans;
        font-weight: 400;
        font-size: 11px;
        line-height: 11px;
      }
      .m-3 {
        margin-top: -3px;
      }
      .container {
        width: 100%;
        height: 100%;
        
        overflow-wrap: break-word;
      }
      .table-main {
        width: 100%;
        height: 100%;
      }
      .table-main tr td:nth-child(1) {
        max-width: 190px;
        padding: 23px 20px 33px 20px;
        background: #3D503E;
        color: #FFFFFF;
      }
      .table-main tr td:nth-child(1) .title {
        margin-bottom: 8px;
        color: #E7D17D;
        font-weight: 700;
      }
      .table-main tr td:nth-child(2) {
        max-width: 325px;
        padding: 23px 20px 33px 20px;
        color: #3B3B3B;
      }
      .table-main tr td:nth-child(2) .title {
        color: #E5730A;
        font-weight: 700;
        margin-bottom: 12px;
      }
      .box-title {
        margin-bottom: 45px;
      }
      .table-main .logo {
        width: 230px;
        min-height: 64px;
      }
      .box-title .text {
        color: #FFFFFFFA;
      }
      .box-name {
        color: #E7D17D;
        margin-bottom: 19px;
      }
      .box-info-name {
        margin-bottom: 19px;
      }
      .name {
        font-weight: 700;
      }
      .box-linguistic {
        margin-bottom: 25px;
      }
      .language {
        font-weight: 500px;
      }
      .box-expertise {
        margin-bottom: 149px;
      }
      .box-info-name .availability {
        line-height: 9px;
      }
      .box-recruiter {
        position: relative;
        bottom: 0;
      }
      .box-recruiter .name {
        font-weight: 500;
      }
      .link-onity {
        text-decoration: underline;
        color: #FFFFFF;
      }
      .block-title {
        margin-top: 17px;
        max-width: 314px;
        min-height: 50px;
        margin-bottom: 40px;
      }
      .block-title .text {
        font-size: 24px;
        font-weight: 700;
        line-height: 21.6px;
      }
      .block-linguistic {
        margin-bottom: 25px;
      }
      .block-experience {
        margin-bottom: 50px;
      }
      .block-experience .position {
        margin-top: 9px;
        font-weight: 700;
      }
      .block-experience .company {
        font-weight: 500;
        color: #6F7073;
      }
      .block-experience .date {
        font-weight: 500;
        color: #E5730A;
      }
      .block-experience .description {
        margin-top: 5px;
      }
      .break-page {
        page-break-before: always;
      }
      .block-qualification .title {
        font-weight: 700;
        color: #E5730A;
      }
      .block-qualification .name {
        margin-top: 9px;
        font-weight: 400;
      }
      .block-qualification {
        margin-bottom: 35px;
      }
      .block-education .title{
        font-weight: 700;
        color: #E5730A;
      }
      .block-education .grade {
        font-weight: 700;
        margin-top: 9px;
      }
      .disclaimer {
        margin-top: 280px;
        color: #6F7073;
        font-size: 8px;
        line-height: 8px;
      }
      .second .box-recruiter {
        margin-top: 370px;
      }
      .block-education .center,
      .block-education .position {
        line-height: 9px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      
      <table class="table-main">
        <tr>
          <td>

            <div class="box-title">
              <img class="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAAqCAYAAAA9D/DpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS8SURBVHgB7ZyBdeIwDEDFvRuADS6d4NoJLp3g2IB0grYTwE1AmaB0grYTkJugvQnIBu0GOouYVighsZMAJtV/Lw9ibCs4QpYVGYAvDm6TgHJUvoGiBIQqpBIU30G5ZO9foWOMGxBt3g8GgwwU5ViQMgofNQalEp2ylaBQhVSCQhVSCQpVSCUoKlfZxgkfmpfh5vwQq0RdlX5tBrLAKMS5eRmbIwGmjIzUHA9GWRbgiVXwR1Z0a/p5tavPiTnOS2SmTeUxuTPbdx1zI+cJPDH935iX3yUfDYVcCiu9gxuV12Jk0njFm3NT9xI8sT/+GXyO+bPp5w5CgW4curPi1syxfxkGScyxdBPnL4/JdZWRQANMuwV2T1IjMxH1Y/Ckiz72hrmYe/TnDXOL6iojwnassIFSYg8V0sp9Y/WX4Anm47lhBQGw9iExN/8JK6dp5QHy6ZJPMRHkU2tkz9dTsGl/YUy961RUBrWdQ3FKI2W/ZvLoddlA3rM5sh2fJdCe1BxYUk7jM2LnNAW7XnfmUIfGbGLfx2ZcYjMuqUM7sAofsaI/EAJYtFr0q4lq2kxFGye/A8stpIs8aYGm0BHoaZU8+97rkxrT31BYSWf/D7dnjSCs4xr6EmLQIsd2j6wNDcrQoY238rO2L1wedMQpK6SVcdfBfZhBIFAc8hc7X3iEWubsPQ1CDP6kHvJuuTz08F17Dl+J0324cWgzEedzCARSSH5j/zm2A+urSP/SlwePujITRxUSPu5Dyoquq+rbGSlhRT5GaO/IJzW+CxNev3aqaEPLRVPf4QuSYY1rMBLnwVhHQh8d9gBrJTNWNKmozi0ouUyd54C2QRWyP3D3Jy6zklgM9fi4TAdBFbI/UMiHuzWjkjrcOmZtHsfuC1XInmB9bO4PjnkIyFpMvhAMIxAuUIXsFzwwLkNAY1E3hQBRhewR1kqmrGg9RYce6uGoQvYPGQIiX3JSUScoVCF7xo5AeczO01CtI0EKmbFzr1Qy2A4hBBXPCgQZzK8dX8wTJihPIMGG+Z8gQkCwfZ+CCoQXaPJw3rabiAf0kUObVskGuIdEiH30Kfpfsv5rs2pKxvUHeILFLCBn+UeHlEJc9EudUprPx6LNvaOsr6iQMit7VlG3cC+gIVhMEdzL9+ua9Z4ac6G0z4UHUjPIHd8n/gzZKhDtHZEZJWcufgnmVpT/Si9dE0pte54Ee1UX2LXyYqiG/5gW5vhbUfepyTN1q1h8us7McWWOV+rPXieFZaai6UXTR3vWqNBYD5nMtonUhwFzE7/CZrikO23kHNRCllictnhPn+x7r9CPKbQAi2PtNIsdm/Uq2/5qaNeaz6+R2twGtUstUOzsQeObOTahcZ1CO04m1MP52JdtB+0Cc8vD981INvtt7hqGDzJoTgbb11HHO7ST1xl2rM4wn1H4PiFOCnZrMLQA8+k6ZkXBBsIlg10f4GdYJ2LFNFCZ5ia2B/OM9whyH6/TcbVGhU/RXr66onQKBri91RX9w9KegflCMWJFnfmOqP/BrviC27tBO7WOeADUQp4oduEik3B/irLgMsLrGIBykmDxIYMkg3wxk0F3Mk/KH1UOCNb/T9IIFOVQ7FBISqhY4gn/icJ/T7OcGUqfLUAAAAAASUVORK5CYII=" alt="logo">
              <p class="text">Operating in Germany since 2018</p>
            </div>

            <div class="box-name m-3">
              <p class="name m-3"><?php echo htmlspecialchars($data['personalInformation']['name']); ?></p>
              <p class="ID m-3">ID <?php echo htmlspecialchars($data['personalInformation']['id']); ?></p>
            </div>

            <div class="box-info-name m-3">
              <p class="location m-3">Ort: <?php echo htmlspecialchars($data['personalInformation']['location']); ?></p>
              <p class="employment m-3">Anstellungsart: <?php echo htmlspecialchars($data['personalInformation']['availability']); ?></p>
              <p class="availability">Verfügbarkeit: <?php echo htmlspecialchars($data['personalInformation']['position']); ?></p>
              <p class="salary-expectation m-3">Gehaltsvorstellungen: <?php echo htmlspecialchars(isset($data['personalInformation']['salary']['€ Annual gross']) ? $data['personalInformation']['salary']['€ Annual gross'] : $data['personalInformation']['salary']['€ Hourly gross']); ?>€</p>
            </div>

            <div class="box-linguistic m-3">
              <p class="title m-3">Sprachkenntnisse</p>

              <?php foreach ($data['personalInformation']['languages'] as $language): ?>
                <p class="language m-3"><?php echo htmlspecialchars($language['language']) . ' ' . htmlspecialchars($language['proficiency']); ?></p>
              <?php endforeach; ?>
            </div>

            <div class="box-expertise m-3">
              <p class="title m-3">Kenntnisse</p>

              <p class="highlight m-3"><?php echo htmlspecialchars($data['expertise']['highlight']); ?></p>
              <p class="expertise m-3"><?php echo htmlspecialchars($data['expertise']['expertise']); ?></p>
            </div>

            <div class="box-recruiter m-3">
              <p class="title m-3">Ihr Personalberater</p>

              <p class="name m-3"><?php echo htmlspecialchars($data['recruiter']['recruitersName']); ?></p>
              <p class="number-phone m-3">+49 233 221 543</p>
              <p class="mail m-3">gy@onity.dev</p>
              <a class="link-onity" href="../index.html">onity.dev</a>
            </div>

          </td>
          <td>
            
            <div class="block-title">
              <p class="text m-3"><?php echo htmlspecialchars($data['personalInformation']['position']); ?></p>
            </div>

            <div class="block-linguistic m-3">
              <p class="title m-3">Sprachkenntnisse</p>

              <p class="info m-3">
                Philipp Klein verfügt über umfangreiche Erfahrung als SAP FI/CO Berater im 
                Bankensektor und bringt fundierte Fachkenntnisse in Finanzprozessen und 
                Controlling mit. Durch seine analytischen Fähigkeiten und lösungsorientierte 
                trägt er maßgeblich zur Optimierung interner Abläufe und zur erfolgreichen 
                Umsetzung von SAP-Projekten bei. Seine hohe Kundenorientierung und Kommunikationsstärke 
                machen ihn zu einem idealen Kandidaten für Ihre SAP-Beraterposition.
              </p>
            </div>
            
            <div class="block-experience m-3">
              <p class="title m-3">Berufserfahrung</p>

              <?php foreach ($data['experience'] as $experience): ?>
                <h3 class="position"><?php echo htmlspecialchars($experience['position']); ?></h3>
                <p class="company m-3">
                  <?php echo htmlspecialchars($experience['company']); ?>, 
                  <?php echo htmlspecialchars($experience['location']); ?>, 
                  <?php echo htmlspecialchars($experience['country']); ?>
                </p>
                <p class="date m-3"><?php echo htmlspecialchars($experience['startDate']); ?> - <?php echo htmlspecialchars($experience['endDate']); ?></p>
                <p class="description"><?php echo htmlspecialchars($experience['taskDescription']); ?></p>
              <?php endforeach; ?>
            </div>

          </td>
        </tr>
      </table>

      <div class="break-page"></div>

      <table class="table-main second">
        <tr>
          <td>

            <div class="box-title">
              <img class="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAAqCAYAAAA9D/DpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS8SURBVHgB7ZyBdeIwDEDFvRuADS6d4NoJLp3g2IB0grYTwE1AmaB0grYTkJugvQnIBu0GOouYVighsZMAJtV/Lw9ibCs4QpYVGYAvDm6TgHJUvoGiBIQqpBIU30G5ZO9foWOMGxBt3g8GgwwU5ViQMgofNQalEp2ylaBQhVSCQhVSCQpVSCUoKlfZxgkfmpfh5vwQq0RdlX5tBrLAKMS5eRmbIwGmjIzUHA9GWRbgiVXwR1Z0a/p5tavPiTnOS2SmTeUxuTPbdx1zI+cJPDH935iX3yUfDYVcCiu9gxuV12Jk0njFm3NT9xI8sT/+GXyO+bPp5w5CgW4curPi1syxfxkGScyxdBPnL4/JdZWRQANMuwV2T1IjMxH1Y/Ckiz72hrmYe/TnDXOL6iojwnassIFSYg8V0sp9Y/WX4Anm47lhBQGw9iExN/8JK6dp5QHy6ZJPMRHkU2tkz9dTsGl/YUy961RUBrWdQ3FKI2W/ZvLoddlA3rM5sh2fJdCe1BxYUk7jM2LnNAW7XnfmUIfGbGLfx2ZcYjMuqUM7sAofsaI/EAJYtFr0q4lq2kxFGye/A8stpIs8aYGm0BHoaZU8+97rkxrT31BYSWf/D7dnjSCs4xr6EmLQIsd2j6wNDcrQoY238rO2L1wedMQpK6SVcdfBfZhBIFAc8hc7X3iEWubsPQ1CDP6kHvJuuTz08F17Dl+J0324cWgzEedzCARSSH5j/zm2A+urSP/SlwePujITRxUSPu5Dyoquq+rbGSlhRT5GaO/IJzW+CxNev3aqaEPLRVPf4QuSYY1rMBLnwVhHQh8d9gBrJTNWNKmozi0ouUyd54C2QRWyP3D3Jy6zklgM9fi4TAdBFbI/UMiHuzWjkjrcOmZtHsfuC1XInmB9bO4PjnkIyFpMvhAMIxAuUIXsFzwwLkNAY1E3hQBRhewR1kqmrGg9RYce6uGoQvYPGQIiX3JSUScoVCF7xo5AeczO01CtI0EKmbFzr1Qy2A4hBBXPCgQZzK8dX8wTJihPIMGG+Z8gQkCwfZ+CCoQXaPJw3rabiAf0kUObVskGuIdEiH30Kfpfsv5rs2pKxvUHeILFLCBn+UeHlEJc9EudUprPx6LNvaOsr6iQMit7VlG3cC+gIVhMEdzL9+ua9Z4ac6G0z4UHUjPIHd8n/gzZKhDtHZEZJWcufgnmVpT/Si9dE0pte54Ee1UX2LXyYqiG/5gW5vhbUfepyTN1q1h8us7McWWOV+rPXieFZaai6UXTR3vWqNBYD5nMtonUhwFzE7/CZrikO23kHNRCllictnhPn+x7r9CPKbQAi2PtNIsdm/Uq2/5qaNeaz6+R2twGtUstUOzsQeObOTahcZ1CO04m1MP52JdtB+0Cc8vD981INvtt7hqGDzJoTgbb11HHO7ST1xl2rM4wn1H4PiFOCnZrMLQA8+k6ZkXBBsIlg10f4GdYJ2LFNFCZ5ia2B/OM9whyH6/TcbVGhU/RXr66onQKBri91RX9w9KegflCMWJFnfmOqP/BrviC27tBO7WOeADUQp4oduEik3B/irLgMsLrGIBykmDxIYMkg3wxk0F3Mk/KH1UOCNb/T9IIFOVQ7FBISqhY4gn/icJ/T7OcGUqfLUAAAAAASUVORK5CYII=" alt="logo">
              <p class="text">Operating in Germany since 2018</p>
            </div>

            <div class="box-name m-3">
              <p class="name m-3"><?php echo htmlspecialchars($data['personalInformation']['name']); ?></p>
              <p class="ID m-3">ID <?php echo htmlspecialchars($data['personalInformation']['id']); ?></p>
            </div>

            <div class="box-recruiter">
              <p class="title m-3">Ihr Personalberater</p>

              <p class="name m-3"><?php echo htmlspecialchars($data['recruiter']['recruitersName']); ?></p>
              <p class="number-phone m-3">+49 233 221 543</p>
              <p class="mail m-3">gy@onity.dev</p>
              <a class="link-onity" href="../index.html">onity.dev</a>
            </div>
            
          </td>
          <td>

            <div class="block-qualification m-3">
              <p class="title m-3">Qualifikationen</p>

              <p class="name"><?php echo htmlspecialchars($data['qualifications']['name']); ?></p>
              <p class="school m-3"><?php echo htmlspecialchars($data['qualifications']['school']); ?></p>
              <p class="certificate m-3">Zertifikats-ID: [<?php echo htmlspecialchars($data['qualifications']['certificate']); ?>]</p>
              <p class="date m-3">Ausgestellt: [<?php echo htmlspecialchars($data['qualifications']['date']); ?>]</p>
            </div>
            
            <div class="block-education m-3">
              <p class="title m-3">Ausbildung</p>
              
              <p class="grade"><?php echo htmlspecialchars($data['education']['grade']); ?></p>
              <p class="school m-3"><?php echo htmlspecialchars($data['education']['university']); ?></p>
              <p class="date m-3">Zeitraum: <?php echo htmlspecialchars($data['education']['startDate']); ?> - <?php echo htmlspecialchars($data['education']['endDate']); ?></p>
              <p class="center">Schwerpunkte: <?php echo htmlspecialchars($data['education']['center']); ?></p>
              <p class="position">Abschlussarbeit: <?php echo htmlspecialchars($data['education']['position']); ?></p>
            </div>
            
            <div class="disclaimer"><?php echo htmlspecialchars($data['disclaimer']); ?></div>

          </td>
        </tr>
      </table>

    </div>
  </body>
  </html>
  <?php
    $html = ob_get_clean();

    $dompdf->loadHtml($html);
    $dompdf->setPaper('A4', 'portrait');
    $dompdf->render();
    
    // Сохранение PDF на сервере
    $output = $dompdf->output();
    file_put_contents('generated_pdf/document.pdf', $output);
  }

  // Вызов функции для генерации PDF
  generate_pdf($data);

  // Отправка ответа
  echo json_encode(['status' => 'success']);
?>
