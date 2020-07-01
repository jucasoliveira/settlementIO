mod args;


use actix_web::{get,web, App, HttpResponse, HttpServer, Responder};
use crate::args::Status;


#[get("/")]
async fn index() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[get("/again")]
async fn index2() -> impl Responder {
    HttpResponse::Ok().body("Hello world again!")
}

async fn status() -> impl Responder {
    web::HttpResponse::Ok()
        .json(Status { status: "OK".to_string() })
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {

    println!("Starting Server at http://127.0.0.1:8088", );
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(status))
    })
    .bind("127.0.0.1:8088")?
    .run()
    .await
}