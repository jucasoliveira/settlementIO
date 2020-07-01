use serde::Serialize;
use actix_web::get;

#[derive(Serialize)]
async fn initialize_node_issuer() -> impl Responder {
    HttpResponse::Ok().body("Get node issuer!")
}