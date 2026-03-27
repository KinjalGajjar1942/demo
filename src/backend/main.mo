import Array "mo:core/Array";
import Order "mo:core/Order";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  module Submission {
    public func compare(sub1 : Submission, sub2 : Submission) : Order.Order {
      Text.compare(sub1.name, sub2.name);
    };
  };

  type Submission = {
    name : Text;
    email : Text;
    phone : Text;
    location : Text;
    message : Text;
  };

  let submissions = List.empty<Submission>();

  func requireAdmin(caller : Principal) {
    let admin = Principal.fromText("2vxsx-fae");
    if (caller != admin) {
      Runtime.trap("Access denied: Admins only");
    };
  };

  public shared ({ caller }) func submitForm(name : Text, email : Text, phone : Text, location : Text, message : Text) : async () {
    let submission : Submission = {
      name;
      email;
      phone;
      location;
      message;
    };
    submissions.add(submission);
  };

  public query ({ caller }) func getAllForms() : async [Submission] {
    requireAdmin(caller);
    submissions.toArray().sort();
  };
};
