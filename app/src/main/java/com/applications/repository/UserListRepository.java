// package com.applications.repository;

// import com.applications.model.UserList;

// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.Pageable;
// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

// @Repository
// // ユーザーリストのリポジトリ
// public interface UserListRepository extends JpaRepository<UserList, String> {
//     Page<UserList> findAllByOrderByRegistDateDesc(Pageable pageable);
// }