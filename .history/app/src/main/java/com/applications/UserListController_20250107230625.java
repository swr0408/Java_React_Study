package com.applications;

import com.applications.model.UserList;
import com.applications.repository.UserListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserListController {

    @Autowired
    private UserListRepository userListRepository;

    // ユーザーリストの取得
   @GetMapping("/latest")
public Page<UserList> getLatestUsers(@RequestParam(defaultValue = "0") int page) {
    return userListRepository.findAllByOrderByRegistDateDesc(PageRequest.of(page, 10));
}

}