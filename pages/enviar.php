<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

    // Puedes hacer lo que necesites con esta información, como enviar un correo electrónico o almacenarla en una base de datos.

    // Por ejemplo, enviar un correo electrónico de muestra
    $to = "irventas2023@gmail.com";
    $subject = "Nuevo mensaje de contacto de $nombre";
    $message = "Nombre: $nombre\nEmail: $email\nTeléfono: $telefono\nMensaje:\n$mensaje";
    $headers = "From: $email";

    // Utiliza la siguiente línea para enviar el correo electrónico (descomenta la línea y comenta la siguiente si quieres probarlo)
    // mail($to, $subject, $message, $headers);

    // Mensaje de éxito (cambiarlo según tus necesidades)
    echo "¡Gracias por contactarnos!";

} else {
    // Acceso no válido al script (si alguien intenta acceder directamente a enviar.php)
    echo "Acceso no válido";
}
?>
