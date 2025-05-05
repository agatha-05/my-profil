<?php
if (isset($_GET['nama'])) {
    $nama = htmlspecialchars($_GET['nama']); // biar aman dari XSS
    echo "Halo, $nama!";
} else {
    echo "Halo, siapa namamu?";
}
?>